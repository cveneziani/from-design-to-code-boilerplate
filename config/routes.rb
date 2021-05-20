Rails.application.routes.draw do
  root to: 'movies#index'
  resources :movies, only: :index do
    collection do
      delete 'delete_selected'
    end
  end
end
