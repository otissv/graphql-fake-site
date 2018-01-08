import context from '../../context-fakegql';


export const meetingQueries = {
  Meeting (_, args, context) {
    return context.connectors.meeting.generate({ args, ...context });
  },

  MeetingList (_, args, context) {
    return context.connectors.meeting.generateN({ args, ...context });
  }
};


export const Meeting = {...context};

