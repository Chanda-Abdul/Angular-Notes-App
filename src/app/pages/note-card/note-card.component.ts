import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  deleteIcon = faTimes;

  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('noteText', { static: false }) noteText!: ElementRef<HTMLElement>;
  @ViewChild('truncator', { static: false }) truncator!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {



    // //show truncator if is there a text overflow
    // let style = window.getComputedStyle(this.noteText.nativeElement, null);
    // let viewableHeight = parseInt(style.getPropertyValue("height"), 80);

    // if (this.noteText.nativeElement.scrollHeight > viewableHeight) {
    //   // if there is no text overflow, show the fade out truncator
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
    // } else {
    //   // on text overflow hide text fade out
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none')
    // }



  }

  onDeleteButtonClick() {
    this.deleteEvent.emit();

  }

}
