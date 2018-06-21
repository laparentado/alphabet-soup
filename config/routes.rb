Rails.application.routes.draw do
  get "/leaderboards" => "leaderboards#index"
  devise_for :users, :controllers => {:registrations => "registrations"}

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end

  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end

  root  'home#index'
  post "/posting" => "home#posting"
  get "/new" => "home#new"

  resources :users
end
