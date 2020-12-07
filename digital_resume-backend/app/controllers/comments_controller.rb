class CommentsController < ApplicationController

    def index 
        @comments = Comment.all
        render json: @comments
    end

    def create 
        @comment = Comment.create(com_params)
        @comments.save
        render json: @comment, except:[:created_at, updated_at]
    end


    def destroy
        render json: Comment.find(params[:id]).destroy
    end

private

    def com_params
        params.require(:comment).permit(:about, :experience, :fav_lang, :username, :program_id)
    end


end
