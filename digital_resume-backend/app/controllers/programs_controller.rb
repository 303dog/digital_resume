class ProgramsController < ApplicationController

    def index 
        programs = Program.all
        render json: programs
    end

    def show 
        program = Program.find_by(id: params[:id])
        render json: program
    end

end
