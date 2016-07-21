(function() {

  return {
    events: {
      'app.activated': function(){
        var ticket = this.ticket();
        var requester = ticket.requester();

        this.switchTo('ticket_additional_info', {
          requester_id: requester.id(),
          requester_name: requester.name(),
          requester_email: requester.email(),
          requester_url: 'https://xxxxx.com/' + requester.id()
        });
      }
    }
  };

}());
