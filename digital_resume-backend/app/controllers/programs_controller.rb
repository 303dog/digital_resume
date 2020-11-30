class ProgramsController < ApplicationController

    def index 
        programs = Program.all
        render json: programs, only: [:id, :title, :focus], include: :title
    end

    def show 
        program = Program.find_by(id: params[:id])
        render json: program, except: [:created_at, :updated_at]
    end


end
