class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def delete_selected
    @movies_to_destroy = Movie.where(id: params[:movies])
    @movies_to_destroy.destroy_all

    @movies = Movie.all
    render partial: 'movies/list', locals: { movies: @movies }
  end
end
