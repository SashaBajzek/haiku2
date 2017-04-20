module Api
  module V1
    class HaikusController < ApplicationController

      before_action :set_haiku, only: [:show, :destroy] 
			
			# GET /haikus
      def index
        render json: Haiku.all
      end 

			# POST /haikus
      def create
        @haiku= Haiku.create(haiku_params)
        if @haiku.save
          render json: @haiku, status: 201
        else
          render json: { errors: @haiku.errors.full_messages }, status: 422
        end
      end 

			# GET /haikus/1
      def show
        render json: @haiku = Haiku.find(params[:id]) 
      end 
			
			# DELETE /haikus/1
      def destroy
        @haiku.destroy
        render :show, status: :ok
      end 

      private
			# Use callbacks to share common setup or constraints between actions.
      def set_haiku
        @haiku = Haiku.find(params[:id])
      end 
			# Only allow a trusted parameter "white list" through.
      def haiku_params
        params.permit(:haikuLine1, :haikuLine2, :haikuLine3, :haikuTheme)
      end 

    end 
  end 
end 