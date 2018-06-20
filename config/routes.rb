Rails.application.routes.draw do

  root  'home#index'
  post "/posting" => "home#posting"
  get "/new" => "home#new"
  

  devise_for :users
  resources :users
 

end
