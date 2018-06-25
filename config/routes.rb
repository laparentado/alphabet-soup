Rails.application.routes.draw do
  get "/leaderboards" => "leaderboards#index"
  devise_for :users, :controllers => {:registrations => "registrations"}

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    get 'signup', to: 'devise/registrations#new'
    get 'edit password', to: 'devise/passwords#edit'

    authenticated  do
      root to: 'home#landingpage'
    end

    unauthenticated  do
      root to: 'devise/sessions#create'
    end

  end

  post "/posting" => "home#posting"
  get "/new" => "home#new"
  get "/index" => "home#index"
  get "/welcome" => "home#landingpage"

  resources :users
end
