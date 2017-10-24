Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  namespace :api do
    resources :projects 
    resources :blog_posts
  end 
end
