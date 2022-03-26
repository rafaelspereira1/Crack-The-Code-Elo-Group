import { v4 as uuidv4 } from "uuid";

export function createLead(lead) {
  const rawLeads = localStorage.getItem("leads");

  const leads = JSON.parse(rawLeads) || [];

  const newLeads = [
    ...leads,
    {
      id: uuidv4(),
      index: leads.length,
      ...lead,
    },
  ];

  localStorage.setItem("leads", JSON.stringify(newLeads));
}

export function getLeads() {
  const rawLeads = localStorage.getItem("leads");

  return JSON.parse(rawLeads) || [];
}

export function updateLead(newLead) {
  const leads = getLeads();

  const newLeads = leads.map((lead) =>
    lead.id === newLead.id ? newLead : lead
  );

  localStorage.setItem("leads", JSON.stringify(newLeads));
}
