Rails.application.routes.draw do
  devise_for :users
  resources :users
  get 'home/index'
  root "home#index"
end
