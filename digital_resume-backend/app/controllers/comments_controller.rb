class CommentsController < ApplicationController

    def index 
        comments = Comment.all
        render json: comments
    end

    def show
        com = Comment.find_by(id: params[:id])
        render json: com, except: [:created_at, :updated_at]
    end

    def destroy
        render json: Comment.find(params[:id]).destroy
    end
end
