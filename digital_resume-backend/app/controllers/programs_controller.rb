class ProgramsController < ApplicationController

    def index 
        @programs = Program.all
        render json: @programs, only: [:id, :title, :focus, :repo, :program_lang], include: :comments
    end


    def create 
        @program = Program.create(prog_params)
        @programs.save
        render json: @program, except:[:created_at, updated_at]
    end





    private

    def prog_params
        params.require(:programs).permit(:id, :title, :program_lang, :focus, :repo)
    end

end
