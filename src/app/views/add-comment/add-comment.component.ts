import { Component, OnInit } from '@angular/core';
import {SeriesService} from "../../services/series/series.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../models/comment.model";


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAddComment(comment: Comment) {
      console.log('test');
      const id = Number.parseInt(this.route.snapshot.params.id);
      this.seriesService.addComment(id, comment).then(() => {
          this.router.navigateByUrl("series/" + id)
      })
  }

}
