// let ptd={id:'a0k1l6h12',cn:'',mn1:'',mn2:'',gst:'',add:'',ods:['as102','as33','ak508']};

// let ptd1={id:'221026001',cn:'Onkar Singh',mn1:'9554255495',mn2:'9554255495',gst:'07BBNPG0866M2Z7',add:'Uttar Pradesh, Gorakhpur, Siddharthnagar-272152',ods:['as102','as33','ak508']};

// let pt = new Dexie("party");
// // pt.version(1).stores({ptd: "id,cn,mn1,mn2"});
// // pt.ptd.add(ptd1);
// pt.transaction('rw', pt.ptd, function () {

//     console.log(pt.ptd.where("cn").toArray());
    
// });

      var db = new Dexie('party');
      db.version(1).stores({
        ptd: 'id, name, age',
      });
      db.ptd.add({}).then(() => {
       return db.ptd.toArray();
      }).then((f) => {
        console.log(`My young friends: ${JSON.stringify(f)}`);
      }).catch((error) => {
        alert(`Oops, error: ${error}`);
      });

// db.isOpen();
// db.open();
// db.close();


// var db = new Dexie("FriendsAndPetsDatabase");
// db.version(1).stores({
//     friends: "++id,name,age",
//     pets: "++id,name,kind"
// });
// db.open(); 

// // Do some application logic on the database:
// db.transaction("rw", db.friends, db.pets, function () {

//     db.friends.where('name').startsWith('D').each(function(f) {
//         console.log(f.name);
//     });
// }).catch (function (e) {
//     console.error(e.stack || e);
// });


// var db = new Dexie("FriendsAndPetsDatabase");
// db.version(1).stores({
//     friends: "id"
// });
// // Do some application logic on the database:
// db.transaction("r", db.friends, function () {
//      db.friends.filter(f => /D/i.test(f.name)).each(friend => {
//         console.log("Found Josephine", friend);
//     });
//     // db.friends.where('name').startsWith('D').each(function(f) {
//     //     console.log(f.name);
//     // });
// }).catch (function (e) {
//     console.error(e.stack || e);
// });


// db.friends.filter(f => /d/i.test(f.name)).each(f => {
//         console.log(f);
//     });

selg
//'ods'

    let htmladd='';
    (async()=> { // get party address
      let od=a+selg.slice(-1)+odno;//'as63'
      await db.pt.where('ods').equals(od).toArray((v)=>{
let cadd='<h1 class="p1"><b>To -</b><span></span>'+v[0].cn+', '+v[0].mn1+', '+v[0].mn1+'<br>'+v[0].add+', '+v[0].pin+'</span></h1>';
let radd='<h1><span class="p2"><div>Return address if not delivered<br></div><span>Own Knitted, 9336695049</span><br><span>F-120, Shutter wali gali, near Gujjar chowk, Khanpur Delhi, 110062</span></span></h1>';
        htmladd+=cadd+radd;
      });
    })();
  
  

    (async()=> { // save party details
      await db.pt.add(ptd);
    })();


(function doTheQuery() {
let db = new Dexie("FriendsAndPetsDatabase");
      db.version(1).stores({
          friends: "id"
      });
  return db.friends.filter(f => /d/i.test(f.name)).each(f => {
        console.log(f);
    });
})();




(async()=> {
let db = new Dexie("FriendsAndPetsDatabase");
      db.version(1).stores({
          friends: "id"
      });
  return await db.friends.filter(f => /d/i.test(f.name)).each(f => { console.log(f);}); 
})();


var db = new Dexie("FriendsAndPetsDatabase");
db.version(2).stores({
          friends: ""
      });

    // const bands = await db.bands
    //     .where('name')
    //     .startsWith('A')
    //     .toArray();



// Declare db instance
var db = new Dexie("MyDatabase");

// Define Database Schema
db.version(1).stores({
  friends: "++id, name, age, isCloseFriend",
  notes: "++id, title, date, *items",
});

// db.open();

// Interact With Database
db.transaction("rw", db.friends, db.notes, function* () {
  // Let's add some data to db:
  var friend1Id = yield db.friends.add({
    name: "Camilla",
    age: 25,
    isCloseFriend: 1,
  });
  var friend2Id = yield db.friends.add({
    name: "Ban Ki-moon",
    age: 70,
    isCloseFriend: 0,
  });

  var noteId = yield db.notes.add({
    title: "Shop tomorrow",
    date: new Date(),
    items: ["milk", "butter"],
  });

  // Let's query the db
  var closeFriends = yield db.friends
    .where("isCloseFriend")
    .equals(1)
    .toArray();

  console.log("Close friends:" + closeFriends.map((f) => f.name));

  var toShop = yield db.notes
    .where("title")
    .startsWithIgnoreCase("shop")
    .toArray();

  console.log("Shopping list: " + toShop.map((note) => note.items));
}).catch(function (err) {
  // Catch any error event or exception and log it:
  console.error(err.stack || err);
});