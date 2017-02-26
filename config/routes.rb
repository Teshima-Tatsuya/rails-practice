Rails.application.routes.draw do
  root 'test#index'
	devise_for :users, controllers: { :omniauth_callbacks => "omniauth_callbacks" }
  get 'test/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
