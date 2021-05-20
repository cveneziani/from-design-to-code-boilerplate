import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["checkbox"]

  // connect() {
  //   console.log("Hello from your first Stimulus controller")
  // }

  toggle() {
    // console.log(event);
    // console.log(this.checkboxTargets);
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = event.currentTarget.checked;
    })
  }
}
