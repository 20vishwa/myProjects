$( document ).ready( function () {

	var pause = false;
	var countdownTimer;

	$( '#breakminus' ).click( function () {
		if ( pause === false ) {
			var num = $( '#breakNum' ).text();
			if ( num > 1 ) {
				$( '#breakNum' ).text( --num );
			}
		}

	} );


	$( '#breakplus' ).click( function () {
		if ( pause === false ) {
			var num = $( '#breakNum' ).text();
			$( '#breakNum' ).text( ++num );
		}
	} );
	$( '#sessionminus' ).click( function () {
		if ( pause === false ) {
			var num = $( '#sessionNum' ).text();
			if ( num > 1 ) {
				$( '#sessionNum' ).text( --num );
				$( '#timer' ).text( num );
			}
		}
	} );
	$( '#sessionplus' ).click( function () {

		if ( pause === false ) {
			var num = $( '#sessionNum' ).text();
			$( '#sessionNum' ).text( ++num );
			$( '#timer' ).text( num );
		}
	} );

	$( '#circle' ).click( function () {
		var time = $( '#timer' ).text();
		var t = time.split( ':' );
		var seconds;
		var upgradeTime = parseInt( t[ 0 ] ) * 60;
		$( '#pause' ).text( "Running" );
		$( '#pause' ).addClass( "highlight" );
		if ( parseInt( t[ 1 ] ) )
			seconds = upgradeTime + parseInt( t[ 1 ] );
		else
			seconds = upgradeTime;

		if ( pause === false ) {
			countdownTimer = setInterval( function timer() {

				var hours = Math.floor( seconds / 3600 );
				var minutesLeft = Math.floor( ( seconds ) - ( hours * 3600 ) );
				var minutes = Math.floor( minutesLeft / 60 );
				var remainingSeconds = seconds % 60;
				if ( remainingSeconds < 10 ) {
					remainingSeconds = "0" + remainingSeconds;
				}
				if ( hours > 0 ) {
					document.getElementById( 'timer' ).innerHTML = hours + ":" + minutes + ":" + remainingSeconds;
				} else {
					document.getElementById( 'timer' ).innerHTML = minutes + ":" + remainingSeconds;
				}

				if ( seconds == 0 ) {

					if ( $( '#top-text' ).text() === 'Session' ) {

						$( '#top-text' ).text( 'Break' );
						seconds = parseInt( $( '#breakNum' ).text() ) * 60;

					} else if ( $( '#top-text' ).text() === 'Break' ) {
						$( '#top-text' ).text( 'Session' );
						seconds = parseInt( $( '#sessionNum' ).text() ) * 60;
					}

				} else {
					seconds--;
				}
			}, 1000 );
			pause = true;
		} else if ( pause === true ) {
			clearInterval( countdownTimer );
			$( '#pause' ).text( "Paused" );
			$( '#pause' ).removeClass( "highlight" );
			pause = false;
		}


	} );
} );
