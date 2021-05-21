import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["checkbox"]

  // connect() {
  //   console.log("Hello from your first Stimulus controller")
  // }

  toggle() {
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = event.currentTarget.checked;
    })
  }
}
