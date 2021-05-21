import { Controller } from "stimulus"
import { csrfToken } from "@rails/ujs";

export default class extends Controller {

  static targets = ["checkbox", "list"]
  static values = { path: String } // Add this

  destroyMovies() {
    // Find selected movies ids
    const movieIds = []
    this.checkboxTargets.forEach((checkbox) => {
      if (checkbox.checked ) { movieIds.push(checkbox.dataset.id) }
    })
    // Fetch endpoint to delete selected movies on the server
    fetch(this.pathValue, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json", 'X-CSRF-Token': csrfToken()
      },
      body: JSON.stringify({ movie_ids: movieIds })
    })
      .then(response => response.text())
      .then((data) => {
        // Retrieve the updated index and insert it in the view
        this.listTarget.innerHTML = data;
      });
  }
}
