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
  onSnapshot,
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
    
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    return response;
  }

  static getSnapShotById(collectionName, id, snapshot, error) {
    const documentQuery = query(
      collection(Firebase.db, collectionName),
      where("id", "==", id)
    );

    return onSnapshot(documentQuery, snapshot, error);
  }

  static getGroups(snapshot, error) {
    let groupQuery = query(collection(Firebase.db, "groups"));

    return onSnapshot(groupQuery, snapshot, error);
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
    money = parseFloat(money);

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
    const judgeResponse = await getDocs(judgeQuery);
    const [judge] = judgeResponse.docs;
    const judgeData = judge.data();

    const judgeMoney = parseFloat(judgeData.money);
    // check if the judge has enough money
    if (judgeMoney < money) {
      throw new Error("No tienes suficiente dinero");
    }

    // get the group data
    const groupResponse = await getDocs(groupQuery);
    const [group] = groupResponse.docs;
    const groupData = group.data();
    // check if the judge has invested in the group
    groupData.judges.forEach((investor) => {
      if (investor.name == judgeData.name) {
        throw new Error("Ya has invertido en este grupo");
      }
    });

    // update the judge money
    const judgeMoneyUpdate = judgeMoney - money;
    const updateJudge = {
      money: judgeMoneyUpdate,
    };

    await updateDoc(judge.ref, updateJudge);

    // update the group collection
    const groupMoney = parseFloat(groupData.collection);
    const groupMoneyUpdate = groupMoney + money;
    const updateGroup = {
      collection: groupMoneyUpdate,
      judges: [...groupData.judges, { name: judgeData.name, money }],
    };

    await updateDoc(group.ref, updateGroup);

    Firebase.userDate = { ...judgeData, ...updateJudge };
  }
}

Firebase.init();
export const firebase = Firebase;
export const db = Firebase.db;
export const storage = Firebase.storage;
// export const auth = Firebase.auth
