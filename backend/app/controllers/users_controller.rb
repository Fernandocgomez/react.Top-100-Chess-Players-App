class UsersController < ApplicationController

    skip_before_action :check_authentication, only: [:create, :index]

    def index 
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: "Failed to create user"}, status: :no_acceptable
        end
    end
    
    def delete
        user = User.find(params[:id])
        user.destroy
    end
    
    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end


end
