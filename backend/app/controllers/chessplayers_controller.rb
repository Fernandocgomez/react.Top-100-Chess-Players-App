class ChessplayersController < ApplicationController

    skip_before_action :authenticated, only: [:index, :show]

    def index 
        chessplayers = Chessplayer.all
        render :json => chessplayers.to_json(:include => [:comments, :statistics])
        # render json: chessplayers, include: ['comments', 'statistics']   
    end

    def show 
        chessplayer = Chessplayer.find_by(id: params[:id])
        if chessplayer
            render json: chessplayer, include: ['comments', 'statistics']
        else
            render json: {message: "chessplayer not found"}
        end
    end

end
