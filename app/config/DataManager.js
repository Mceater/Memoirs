export default class DataManager {
  static myInstance = null;
  userID = "";

  memories = [
    {
      userid: "user1",
      memoryid: 13453,
      title: "Harry Potter",
      subtitle: "Read on 3rd of March, 2000",
      image: require("../assets/Jack.jpg"),
      category: "Friends",
    },
    {
      userid: "user1",
      memoryid: 24657,
      title: "Game of Thrones 2",
      subtitle: "Read on 13th of May, 2014",
      image: require("../assets/baw.jpg"),
      category: "Friends",
    },
    {
      userid: "user2",
      memoryid: 13543,
      title: "Harry Potter",
      subtitle: "Read on 3rd of March, 2000",
      image: require("../assets/Jack.jpg"),
      category: "Friends",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getMemories(id) {
    return this.memories.filter((memory) => memory.userid === id);
  }

  addMemories(memory) {
    this.memories.push(image);
  }
}
