class ProgramsController < ApplicationController

    def index 
        @programs = Program.all
        render json: @programs
    end
end
