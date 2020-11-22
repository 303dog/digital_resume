class WorkExpsController < ApplicationController

    def index 
        workx = WorkExp.all 
        render json: workx
    end

    def show 
        work = WorkExp.find_by(id: params[:id])
        render json: work 
    end
    
end
