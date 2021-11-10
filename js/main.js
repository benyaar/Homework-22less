// const contactList = [
//     {
//       id: 1,
//       first_name: 'Vasya',
//       last_name: 'Petrov',
//       nick_name: '',
//       phone: 093945394,
//       group: [
//         {
//           name: 'friends',
//           id: 2
//         }
//       ],
//       actions: null
//     },
//     {
//       id: 2,
//       first_name: 'Petya',
//       last_name: '',
//       nick_name: 'Sizo',
//       phone: 09722122,
//       group: [
//         {
//           name: 'best_friends',
//           id: 1
//         }
//       ],
//       actions: [
//         {
//           name: 'missed call',
//           value: 3,
//           id: 1
//         }
//       ]
//     },
//     {
//       id: 2,
//       first_name: 'Rustem',
//       last_name: '',
//       nick_name: 'Box',
//       phone: 09700000,
//       group: [
//         {
//           name: 'other',
//           id: 3
//         }
//       ],
//       actions: [
//         {
//           name: 'missed call',
//           value: 13,
//           id: 1
//         }
//       ]
//     }
// ];
// // console.log(contactList);

// contactList.map(function(contact) {

//     let groupName = contact.groups !== null ? contact.group.map(group => group.name) : '';

//     console.log(
//         `Имя: ${contact.first_name} \nФамилия: ${contact.last_name} \nТелефон: 0${contact.phone} \nГруппа ${groupName}`)  
// });


// let buttonElement = document.getElementById("btn");

// buttonElement.addEventListener('click', function (event) {
//   console.log();
// });

function getValue() {
      let select = document.getElementById("select_");
      let value = select.value;
      console.log(value);
}

// function getValue(value) {
//   console.log(value);
//   }