Rails.application.routes.draw do
  root  'home#index'
  post "/posting" => "home#posting"
  get "/new" => "home#new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
