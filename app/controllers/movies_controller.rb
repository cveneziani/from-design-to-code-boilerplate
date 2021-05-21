class MoviesController < ApplicationController
  def index
    @movies = Movie.all.order(:title)
  end

  def batch_destroy
    @movies_to_destroy = Movie.where(id: params[:movie_ids])
    @movies_to_destroy.destroy_all

    @movies = Movie.all
    render partial: 'movies/list', locals: { movies: @movies }
  end
end
