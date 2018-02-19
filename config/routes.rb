Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post 'user' => 'user#create'

  namespace :api do
    resources :projects 
    resources :blog_posts
    resources :messages
  end 
end
