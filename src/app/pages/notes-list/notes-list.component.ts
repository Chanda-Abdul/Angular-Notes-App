import { style, transition, trigger, animate, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [trigger('itemAnimate', [
    //ENTRY ANIMATION 
    transition('void => *', [
      //Initial state
      style({
        height: 0,
        opacity: 0,
        transform: 'scale(0.85)',
        'margin-bottom': 0,

        //expand out the padding
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
      }),
      // animate the spacing(which includes height and margin)
      animate('50ms',
        style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        }
        )),
      animate('68ms')
    ]),
    transition('* => void', [
      //first scale up
      animate(50, style({
        transform: 'scale(1.05)'
      })), 
      //then scale down back to normal size while begging to fade out
      animate(50, style({
        transform: 'scale(1)',
        opacity: 0.75,
      })),
      //scale down and fade out completly
      animate('120ms ease-out', style({
        transform: 'scale(0.68)',
        opacity: 0,
      })),
      //then animate out the spacing(which includes height and margin)
      animate('150ms ease-out', style({
        height: 0,
        opacity: 0,
        'margin-bottom': 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
      }))
    ])
  ])
,trigger('listAnimate', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        height: 0,
      }),
      stagger('100ms', [
        animate('0.2s ease')
      ])
    ], {
      optional: true,
    })
  ])
])
]
})


export class NotesListComponent implements OnInit {
  searchIcon = faSearch;
  addIcon = faPlus;

  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // we want to retrieve all notes from NotesService
    this.notes = this.notesService.getAll();

  }

  deleteNote(id: number) {
    this.notesService.delete(id)
  }

}
