class ProgramsController < ApplicationController

    def index 
        @programs = Program.all     #instance variable stops the error faster than not.
        render json: @programs, only: [:id, :title, :focus, :repo, :program_lang] #include: :comments
    end

   # def show 
   #     program = Program.find_by(id: params[:id])
   #     render json: program, except: [:created_at, :updated_at]
   # end


end
