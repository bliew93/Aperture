Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show] do
      member do
        post 'follow_user'
        delete 'unfollow_user'
      end
    end
  end


end
