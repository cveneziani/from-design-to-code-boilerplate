import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {

  static targets = ["checkbox", "deleteBtn", "list"]

  // connect() {
  //   console.log("Hello from your first Stimulus controller")
  // }

  checkAllCheckboxes() {
    // console.log(event);
    // console.log(this.checkboxTargets);
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = event.currentTarget.checked;
    })
  }

  deleteSelected() {
    // Find selected movies ids
    const movieIds = []
    this.checkboxTargets.forEach((checkbox) => {
      if (checkbox.checked ) { movieIds.push(checkbox.dataset.id) }
    })
    // Fetch endpoint to delete selected movies on the server
    const path = this.deleteBtnTarget.dataset.path
    fetch(path, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken()
      },
      body: JSON.stringify({ movies: movieIds })
    })
      .then(response => response.text())
      .then((data) => {
        // Retrieve the updated index and insert it in the view
        // console.log(data);
        this.listTarget.innerHTML = data;
      });
  }
}
