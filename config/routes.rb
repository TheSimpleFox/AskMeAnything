Rails.application.routes.draw do
  root "entry#index"

  # Define a catch all route so that React Router works
  get '*path', to: 'entry#index'
end
