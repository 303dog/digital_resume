class ProgramsController < ApplicationController

    def index 
        @programs = Program.all     #instance variable stops the error faster than not.
        render json: @programs, only: [:id, :title, :focus, :repo, :program_lang], include: :comments
    end




end
