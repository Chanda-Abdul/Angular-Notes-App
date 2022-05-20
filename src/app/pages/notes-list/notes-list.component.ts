import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
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
    ])
  ]
  )]
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
