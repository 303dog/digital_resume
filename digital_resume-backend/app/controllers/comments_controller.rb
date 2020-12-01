class CommentsController < ApplicationController

    def index 
        @comments = Comment.all
        render json: @comments
    end

   # def show
   #     com = Comment.find_by(id: params[:id])
   #     render json: com, except: [:created_at, :updated_at]
   # end

    def create 
        @comment = Program.program[:id].comments.create(com_params)
        render json: @comment
    end

    def destroy
        render json: Comment.find(params[:id]).destroy
    end

private

    def com_params
        params.require(:comment).permit(:about, :experience, :fav_lang, :username, :program_id)
    end


end
