class ProgramsController < ApplicationController

    def index 
        @programs = Program.all
        render json: @programs, only: [:id, :title, :focus, :about, :repo, :program_lang, :demo], include: :comments
    end

    def show
        @program = Program.find_by_id(params[:id])
    end

    def create 
        @program = Program.create(prog_params)
        @programs.save
        render json: @program, except:[:created_at, :updated_at]
    end

    def update 
        @program = Program.find_by_id(params[:id]).update
        render json: @program
    end

    def destroy
        @program = Program.find_by_id(prams[:id]).destroy
        render json: @programs
    end


    private

    def prog_params
        params.require(:programs).permit(:id, :title, :program_lang, :focus, :repo, :demo, :about)
    end

end
