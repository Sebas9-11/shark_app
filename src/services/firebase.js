import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Constants from "expo-constants";

class Firebase {
  static user = null;
  static db;
  static auth;
  static storage;
  static app;
  static userType;
  static userData;
  static groups;

  static init() {
    if (!Firebase.app) {
      Firebase.app = initializeApp(Constants.manifest.extra);
      Firebase.db = getFirestore(Firebase.app);
      Firebase.auth = getAuth();
      Firebase.storage = getStorage();
    }
  }

  static async signIn(email, password) {
    if (email && password) {
      const credential = await signInWithEmailAndPassword(
        Firebase.auth,
        email,
        password
      );

      Firebase.user = credential.user.uid;

      Firebase.userType = await Firebase.getById("users", Firebase.user);
      if (Firebase.userType[0].rol == "user") {
        Firebase.userData = await Firebase.getById("groups", Firebase.user);
      } else {
        Firebase.groups = await Firebase.getGroups();
        Firebase.userData = await Firebase.getById("judges", Firebase.user);
      }

      return Firebase.user;
    }

    throw new Error("Verifique los campos");
  }

  static async signUp(email, password) {
    if (email && password) {
      const credential = await createUserWithEmailAndPassword(
        Firebase.auth,
        email,
        password
      );

      Firebase.user = credential.user.uid;
      return Firebase.user;
    }
    throw new Error("Verifique los campos");
  }

  static async signOut() {
    return await signOut(Firebase.auth)
      .then(() => {
        console.log("saliste");
        Firebase.user = null;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  static async addDocument(collectionName, data) {
    if (Firebase.user) {
      return await addDoc(collection(Firebase.db, collectionName), data)
        .then((docRef) => {
          return docRef.id;
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    throw new Error("Error with credentials");
  }

  static async getById(collectionName, id) {
    const response = [];
    const q = query(
      collection(Firebase.db, collectionName),
      where("id", "==", id)
    );
    const querySnapshot = await getDocs(q).catch((error) => {
      console.log(error.message);
    });

    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    return response;
  }

  static async getGroups() {
    const response = [];

    let q = query(collection(Firebase.db, "groups"));

    const querySnapshot = await getDocs(q).catch((error) => {
      console.log(error.message);
    });

    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    return response;
  }

  //upload image to firebase storage
  static async uploadImage(blop, name) {
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const extension = name.split(".").pop();

    if (!allowedExtensions.includes(extension)) {
      throw new Error("Extension no permitida");
    }

    const reference = ref(Firebase.storage, `groups_images/${name}`);
    await uploadBytes(reference, blop);
    return getDownloadURL(reference).then((downloadURL) => downloadURL);
  }

  // send money to the group
  static async sendMoney(id, money) {
    
    money = parseFloat(money)

    // get the group
    const groupQuery = query(
      collection(Firebase.db, "groups"),
      where("id", "==", id)
    );

    // get the judge
    const judgeQuery = query(
      collection(Firebase.db, "judges"),
      where("id", "==", Firebase.user)
    );
  
    // get the judge data
    const judgeResponse  = await getDocs(judgeQuery)
    const [ judge ] = judgeResponse.docs
    const judgeData = judge.data()

    // check if the judge has enough money
    if (judgeData.money < money) {
      throw new Error("No tienes suficiente dinero")
    }
    
    // get the group data
    const groupResponse  =  await getDocs(groupQuery)
    const [ group ] = groupResponse.docs
    const groupData = group.data()
    // check if the judge has invested in the group
    groupData.judges.forEach((investor) => {
      console.log(Firebase.userData.name)
      console.log(investor.name)
      if (investor.name == judgeData.name) {
        throw new Error("Ya has invertido en este grupo")
      }
    })


    // update the judge money
    const updateJudge = {
      money: judgeData.money - money
    }

    await updateDoc(judge.ref, updateJudge)

    // update the group collection
    const updateGroup = {
      collection: groupData.collection + money,
      judges: [...groupData.judges, { name: judgeData.name, money }]
    }

    await updateDoc(group.ref, updateGroup)

    Firebase.userDate = { ...judgeData, ...updateJudge }
  }
}

Firebase.init();
export const firebase = Firebase;
export const db = Firebase.db;
export const storage = Firebase.storage;
// export const auth = Firebase.auth
