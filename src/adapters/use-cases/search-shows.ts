import UseCase from "@/application/shared/use-case";
import tvMazeAdapter from "../tv-maze";
import Shows from "@/domain/show/repository";
import mitt from "mitt";
import type Show from "@/domain/show/entity";

export default class SearchShows extends UseCase<Show> {
    constructor() {
        super(new Shows(tvMazeAdapter), mitt())
    }
}