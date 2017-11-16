/*  Things I need to do:
      Catch the event to submit.
*/
(function() {
const household = []
let serialStart = 0; //testing JSON placeholder for serialize()

class formView {

  constructor() {
    this.form = document.querySelector('form');
    this.form.onsubmit = this.onSubmit;
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(event);
    const { target: form } = event;
    // console.dir(form);
    const { age, rel } = form;
    console.log(age.value, rel.value);
    serialStart++
      household.push({ record :
        [ serialStart,
        age.value, 
        rel.value
        ]
      });
  }
}
console.log(household)
new formView();


})()