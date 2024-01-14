import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJiWs8JjKV4BeocWat9O-IxO12tWi57Qc",
  authDomain: "dreamarizer.firebaseapp.com",
  projectId: "dreamarizer",
  storageBucket: "dreamarizer.appspot.com",
  messagingSenderId: "1089363812173",
  appId: "1:1089363812173:web:47641efd811e7835176104",
  measurementId: "G-DWLQPYQEG4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(imageUrl: string, name: String) {
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const fileName = name.replace(" ", "") + Date.now() + ".jpeg";
    const storageRef = ref(storage, fileName);

    await uploadBytes(storageRef, buffer, {
      contentType: "image/jpeg",
    });

    const firebaseUrl = await getDownloadURL(storageRef);
    return firebaseUrl;
  } catch (error) {
    console.error("ERROR UPLOADING TO FIREBASE", error);
  }
}
