Rails.application.routes.draw do
  root to: 'movies#index'
  resources :movies, only: :index do
    collection do
      delete 'batch_destroy'
    end
  end
end
