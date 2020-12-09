class CommentsController < ApplicationController

    def index 
        @comments = Comment.all
        render json: @comments
    end

    def create 
        @comment = Comment.create(com_params)
        
        render json: @comment
    end


    def destroy
        @com = Comment.find_by_id(params[:id]).destroy
        render json: @comments
    end

private

    def com_params
        params.require(:comment).permit(:about, :experience, :fav_lang, :username, :program_id)
    end


end
