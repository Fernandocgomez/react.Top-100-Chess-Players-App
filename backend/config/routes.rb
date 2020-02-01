Rails.application.routes.draw do
  resources :statistics
  resources :users
  resources :comments
  resources :chessplayers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
