class CommentsController < ApplicationController

    skip_before_action :authenticated, only: [:index, :show]

    def index
        comments = Comment.all
        render json: comments, except: [:created_at, :updated_at]
    end

    def show
        comment = Comment.find_by(id: params[:id])
        if comment 
            render json: comment, except: [:created_at, :updated_at]
        else
            render json: {message: 'Listing not found'}
        end
    end

    def create
        comment = Comment.create(comment_params)
    end

    def destroy
        comment = Comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :chessplayer_id, :content)
    end

end
