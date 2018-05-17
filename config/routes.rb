Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :update]
    resources :users, only: [:show] do
      member do
        post 'follow_user'
        delete 'unfollow_user'
      end
    end

    resources :photos, only: [:index, :create, :update, :destroy]
    resources :photos, only: [:show] do
      member do
        post 'create_comment'
      end
    end
  end
end
