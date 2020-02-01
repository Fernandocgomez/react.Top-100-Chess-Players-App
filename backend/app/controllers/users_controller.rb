class UsersController < ApplicationController

    skip_before_action :authenticated, only: [:index, :create]

    def index 
        users = User.all
        render json: users, except: [:created_at, :updated_at], include: :comments, except: [:created_at, :updated_at]
    end

    # def show 
    #     user = User.find(session[:user_id])
    #     if user
    #         render json: user, except: [:created_at, :updated_at], include: :comments, except: [:created_at, :updated_at]
    #     else
    #         render json: {message: "User not found"}
    #     end
    # end

    def create
        user = User.new(user_params)

        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: "Failed to create user"}, status: :no_acceptable
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end


end
